
define {
    attach: (view) ->
        # Just a simple demonstration of some modules cooperating.
        require.ready () ->
            view.render document.getElementsByTagName('body')[0]
}
