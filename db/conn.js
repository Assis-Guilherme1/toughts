const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('railway', 'root', 'wT68LIzCfnCThEgmaBDi', {
  host: 'containers-us-west-106.railway.app',
  port: 6976,
  dialect: 'mysql',
})

try {
  sequelize.authenticate()
  console.log('Conectamos com o Sequelize!')
} catch (error) {
  console.error('Não foi possível conectar:', error)
}

module.exports = sequelize
