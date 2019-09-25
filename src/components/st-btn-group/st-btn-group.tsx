import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "st-btn-group",
  styleUrl: "st-btn-group.css",
  shadow: true
})
export class StBtnGroup {
  @Prop() display: string;
  @Prop() btns: string[] = ["RENDER ME THIS", "Numero Dos"];
  @Prop() onClickHandler: (target: string) => void = this.clickHandler;

  clickHandler(target: string): void {
    console.error("No handler set for button", target);
  }

  _getBtn(display: string) {
    return (
      <st-btn
        onClickHandler={this.onClickHandler.bind(this, display)}
        display={display}
      ></st-btn>
    );
  }

  _getButtons() {
    return this.btns.map(btn => {
      return this._getBtn(btn);
    }, this);
  }

  render() {
    return <div>{this._getButtons()}</div>;
  }
}
