let sel;

var presets = [{
    name: "Seaweed",
    rules: [{
        a: "F",
        b: "FF[-F--F[++FF]][+F+++F[--F-F]]"
    }]
}, {
    name: "Seaweed2",
    rules: [{
        a: "F",
        b: "FF[[-FF-FF]X[+FF+FF]]F"
    }, {
        a: "X",
        b: "--FFF++FFFX"
    }]
}, {
    name: "Branch",
    rules: [{
        a: "F",
        b: "F[--F]F[++F]F[--F]F[++F]F"
    }]
}, {
    name: "Palm",
    rules: [{
        a: "F",
        b: "FF[-F-F-FF]+[++F]-[+F+F+FF]"
    }]
}, {
    name: "Palm 2",
    rules: [{
        a: "F",
        b: "FF[-FFF[+F++FF]F-F]+F-[[+FF+F]-FF-FF-F]"
    }]
}, {
    name: "Fern",
    rules: [{
        a: "F",
        b: "FF[-F[-FF[-FF[-FF]]]]F[+F[+FF[+FF[+FF]]]]"
    }]
}, {
    name: "Fractal",
    rules: [{
        a: "F",
        b: "FF[--F+F][++F-F]F"
    }]
}]


function setupPresets() {
    sel = createSelect();
    sel.changed(onPresetChange);

    for (let i = 0; i < presets.length; i++) {
        sel.option(presets[i].name, i);
    }
}

function onPresetChange() {
    rules = presets[sel.value()].rules
}
