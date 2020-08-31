import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import AffectedResources from '../basic/AffectedResources';

const OngoingScheduledEvent = ({ event, monitorList, history, projectId }) => {
    return (
        <div
            className="Box-root Margin-bottom--12 box box__yellow--dark"
            style={{
                width: '100%',
            }}
            key={event._id}
            onClick={() => {
                history.push(
                    `/dashboard/project/${projectId}/scheduledEvents/${event._id}`
                );
            }}
        >
            <div className="box-inner ongoing__schedulebox">
                <div
                    style={{
                        textTransform: 'uppercase',
                        fontSize: 11,
                        fontWeight: 900,
                    }}
                >
                    Ongoing Scheduled Event
                </div>
                <div className="ongoing__scheduleitem">
                    <span>{event.name}</span>
                    <span>{event.description}</span>
                </div>
                <div className="ongoing__affectedmonitor">
                    <AffectedResources
                        event={event}
                        monitorState={monitorList}
                    />
                </div>

                <span
                    style={{
                        display: 'inline-block',
                        fontSize: 14,
                        fontWeight: 'lighter',
                    }}
                >
                    {moment(event.startDate).format('MMMM Do YYYY, h:mm a')}
                    &nbsp;&nbsp;-&nbsp;&nbsp;
                    {moment(event.endDate).format('MMMM Do YYYY, h:mm a')}
                </span>
                <span className="se__icon se__icon--forward"></span>
            </div>
        </div>
    );
};

OngoingScheduledEvent.displayName = 'OngoingScheduledEvent';

OngoingScheduledEvent.propTypes = {
    event: PropTypes.object,
    monitorList: PropTypes.array,
    history: PropTypes.object,
    projectId: PropTypes.string,
};

export default withRouter(OngoingScheduledEvent);