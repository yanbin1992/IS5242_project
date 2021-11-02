import React, { Component } from "react";
import * as LayoutHelper from "./Helper/LayoutHelper";
import { Stacy } from "./Helper/stacyCharaterHelper";
import { Roblox } from "./Helper/robloxCharaterHelper";
import { Roblox2 } from "./Helper/robloxCharaterHelper2";
import ChatInput from "./chat/chatInput";
import { Button, Input } from "antd";

export default class CharacterRun extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initLoad: true,
      robloxShow1: true,
      stacyShow: false,
    };
  }

  componentDidMount() {
    if (this.state.initLoad) {
      this.setState({ ...this.state, initLoad: false });
    }
  }

  render() {
    if (this.state.initLoad === false) {
      Roblox(3);
      if (this.state.stacyShow === true) {
        Stacy(5);
      } else {
        Roblox2(3);
      }
    }

    const handleChangeModel = () => {
      console.log("changeModel");
      this.setState({ ...this.state, stacyShow: !this.state.stacyShow });
    };

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
        ref={(mount) => {
          this.mount = mount;
        }}
      >
        <div className="container">
          <div>
            <Button onClick={() => Roblox(1)}>Test_1</Button>
            <Button onClick={() => Roblox(2)}>Test_2</Button>
            <Button onClick={() => Roblox(3)}>Test_3</Button>
            <Button onClick={() => Roblox(4)}>Test_4</Button>
            <Button onClick={() => Roblox(5)}>Test_5</Button>
          </div>
          <ChatInput Roblox={Roblox} />
          <canvas
            id="d"
            style={{
              position: "absolute",
              top: "50px",
              left: 0,
              width: LayoutHelper.windowHelper().width / 2,
              height: LayoutHelper.windowHelper().height - 100,
            }}
          ></canvas>
        </div>
        {/* <Button onClick={handleChangeModel} style={{ height: "40px" }}>
          {this.state.stacyShow ? "Compare to Roblox2" : "Compare to Stacy"}
        </Button> */}

        <div className="container">
          {this.state.stacyShow ? (
            <Button onClick={() => Stacy(5)}>Test</Button>
          ) : (
            <div>
              <div>
                <Button onClick={() => Roblox2(1)}>Test_1</Button>
                <Button onClick={() => Roblox2(2)}>Test_2</Button>
                <Button onClick={() => Roblox2(3)}>Test_3</Button>
                <Button onClick={() => Roblox2(4)}>Test_4</Button>
                <Button onClick={() => Roblox2(5)}>Test_5</Button>
              </div>
              <ChatInput Roblox={Roblox2} />
            </div>
          )}
          <canvas
            id="c"
            style={{
              position: "absolute",
              top: "50px",
              right: 0,
              width: LayoutHelper.windowHelper().width / 2,
              height: LayoutHelper.windowHelper().height - 100,
            }}
          ></canvas>
        </div>
      </div>
    );
  }
}