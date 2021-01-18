const { find, update, removeField } = require('../util/db');

const incomingRequestCollection = 'incomingrequests';

async function run() {
    const requests = await find(incomingRequestCollection, {
        filters: { $exists: false },
        deleted: false,
    });

    for (const request of requests) {
        const data = {
            filters: [
                {
                    filterCriteria: request.filterCriteria,
                    filterCondition: request.filterCondition,
                    filterText: request.filterText,
                },
            ],
        };

        await update(incomingRequestCollection, { _id: request._id }, data);

        await removeField(
            incomingRequestCollection,
            { _id: request._id },
            { filterCriteria: '', filterCondition: '', filterText: '' }
        );
    }

    return `Script ran for ${requests.length} incoming requests`;
}

module.exports = run;