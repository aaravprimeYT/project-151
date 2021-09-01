AFRAME.registerComponent('base', {
    schema: {
        radius: { type: "number", default: 125},
        height: { type: "number", default: 3}
    },

    init: function () {
      this.el.setAttribute("geometry", {
          primitive: "cylinder",
          radius: this.data.radius,
          height: this.data.height
      });
      const position = {x: 0, y: -50, z: -100}
      this.el.setAttribute("material", {color: "#808080"});
      this.el.setAttribute("position", position);
    },
});
