const { getCustomerList } = require(`../../lib/customer`)

async function list(req, res) {
    try {
        const customers = await getCustomerList(req)
        return customers
        ? res.success(customers, 'Successfully get customers.')
        : res.error('Unable to get customers',404)
    } catch (error) {
        console.log(error)
        return res.error('Internal server error');
    }
}

module.exports = [list]