module.exports = function(app) {
    const fisevroController = require('../controllers/fisevroController')

    app.route('/fisevros')
        .get(fisevroController.listar_todos_fisevros)
        .post(fisevroController.adicionar_um_fisevro)

    app.route('/fisevros/:fisevroId')
        .get(fisevroController.listar_um_fisevro)
        .put(fisevroController.atualiza_um_fisevro) 
        .delete(fisevroController.remover_um_fisevro)
};