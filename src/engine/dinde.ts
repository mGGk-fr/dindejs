import p5 from "p5";
import Logger from "./utils/Logger";
import Demo from "./demo/Demo";

class Dinde {
  p5Instance: p5 | undefined = undefined;

  boot() {
    Logger("Dinde is booted, ready to demo :D");
    this.start();
  }

  private procSetup(p: p5) {
    return () => {
      Demo.setup(p);
    };
  }

  private procDraw(p: p5) {
    return () => {
      Demo.draw(p);
    };
  }

  start() {
    const p5Invoker = (instance: p5) => {
      instance.setup = this.procSetup(instance);
      instance.draw = this.procDraw(instance);
    };
    this.p5Instance = new p5(p5Invoker);
  }
}

export default new Dinde();
