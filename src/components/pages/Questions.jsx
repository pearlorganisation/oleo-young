import React from "react";

export default function Questions() {
    return (
        <>
            <div className="container-fluid qn-container">
                <div className="row">
                    <div className="col-md-10 mx-auto text-center">
                        <div className="row">
                            <div className="col-md-6 mx-auto">
                            <h2 className="qn-main-heading">Questions and Answers</h2>
                        <h2 className="qn-sub-heading">Get advice from today's house interior experts and experts.</h2>
                        <div class="mb-3 mx-auto">
                            <input type="password" className="form-control qn-input" id="exampleInputPassword1" placeholder="search" />
                        </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}