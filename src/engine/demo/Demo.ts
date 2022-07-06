import p5 from "p5";

class Demo {
  renderWidth = 1280;
  renderHeight = 720;

  setup(instance: p5) {
    instance.createCanvas(this.renderWidth, this.renderHeight, "webgl");
  }

  draw(instance: p5) {
    instance.background("black");
  }
}

export default new Demo();
