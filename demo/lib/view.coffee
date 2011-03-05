
define ['cs!util'], (util) ->
    return {
        render: (body) ->
            body.appendChild util.toDom('<b>This is a rendered view</b>')
    }
