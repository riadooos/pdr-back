import { addNewPdr, getAllPdrs } from "../controllers/pdrController"

const pdrRourtes = (app) => {
    app.route('/api/pdrs').get(getAllPdrs)
    app.route('/api/pdrs/add-pdr').post(addNewPdr)
}

export default pdrRourtes