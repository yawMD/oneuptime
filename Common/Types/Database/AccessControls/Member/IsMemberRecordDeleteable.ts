export default () => {
    return (ctr: Function) => {
        ctr.prototype.canMemberDeleteRecord = true;
    };
};