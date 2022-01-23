import React from "react";
import "./PlanScreen.css";

function PlanScreen(){

    return(
        <div className="planScreen">
            <div className="planScreen__details planScreen__standard">
                <div>
                    <h4>Netflix Standard</h4>
                    <p>1080p</p>
                </div>

                <button>Subscribe</button>
            </div>

            <div className="planScreen__details planScreen__Basic">
                <div>
                    <h4>Netflix Basic</h4>
                    <p>480px</p>
                </div>

                <button>Subscribe</button>

            </div>

            <div className="planScreen__details planScreen__Premium">
                <div>
                    <h4>Netflix Premium</h4>
                    <p>4K+HDR</p>
                </div>

                <button>Subscribe</button>


            </div>
        </div>
    );
}

export default PlanScreen;
