import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "st-btn",
  styleUrl: "st-btn.css",
  shadow: true
})
export class StBtn {
  @Prop() display: string;
  @Prop() onClickHandler: (btnName: string) => void;

  render() {
    return (
      <button onClick={() => this.onClickHandler(this.display)}>
        {this.display}
      </button>
    );
  }
}
