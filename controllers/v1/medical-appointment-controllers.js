const createAppointment = (req, res) => {
    res.send({status:'OK', message:'appointment-create'});
};
const updateAppointment = (req, res) => {
    res.send({status:'OK', message:'appointment-update'});
}
const deleteAppointment = (req, res) => {
    res.send({status:'OK', message:'appointment-delete'});
}
const getAppointment = (req, res) => {
    res.send({status:'OK', message:'appointment-list'});
}

module.exports = {
    createAppointment,
    updateAppointment,
    deleteAppointment,
    getAppointment
}