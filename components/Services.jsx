import React from "react";
import image1 from  '../image1.jpg';
import img2 from  '../img2.jpg';
import img3 from  '../img3.jpg';
import '../App.css';


function Services(){
    return(
        <div className="main">
            <h1>Voyage</h1>
            <br/>
            <br/>
            <h2>Marketing team</h2>
        <div className="container">
            <div className="card">
                <div className="content">
                    <div className="imgBx">
                        <img src={image1} alt="Picture_here" height={250} width={270}/>
                    </div>
                    <div className="contentBx">
                        <h4>James Ford</h4>
                        <h5>Manager</h5>
                    </div>
                    
                </div>
            </div>
            <div className="card">
                <div className="content">
                    <div className="imgBx">
                        <img src={img2} alt="Picture_here" height={250} width={270}/>
                    </div>
                    <div className="contentBx">
                        <h4>Michael Collins</h4>
                        <h5>Asst. Manager</h5>
                    </div>
                    
                </div>
            </div>
            <div className="card">
                <div className="content">
                    <div className="imgBx">
                        <img src={img3} alt="Picture_here" height={250} width={270}/>
                    </div>
                    <div className="contentBx">
                        <h4>Tom Holland</h4>
                        <h5>Employee</h5>
                    </div>
                    
                </div>
            </div>
        </div>
        <h2>Technical team</h2>
        <div className="container">
            <div className="card">
                <div className="content">
                    <div className="imgBx">
                        <img src={image1} alt="Picture_here" height={250} width={270}/>
                    </div>
                    <div className="contentBx">
                        <h4>James Ford</h4>
                        <h5>Manager</h5>
                    </div>
                    
                </div>
            </div>
            <div className="card">
                <div className="content">
                    <div className="imgBx">
                        <img src={img2} alt="Picture_here" height={250} width={270}/>
                    </div>
                    <div className="contentBx">
                        <h4>Michael Collins</h4>
                        <h5>Asst. Manager</h5>
                    </div>
                    
                </div>
            </div>
            <div className="card">
                <div className="content">
                    <div className="imgBx">
                        <img src={img3} alt="Picture_here" height={250} width={270}/>
                    </div>
                    <div className="contentBx">
                        <h4>Tom Holland</h4>
                        <h5>Employee</h5>
                    </div>
                    
                </div>
            </div>
        </div>
        <h2>Security team</h2>
        <div className="container">
            <div className="card">
                <div className="content">
                    <div className="imgBx">
                        <img src={image1} alt="Picture_here" height={250} width={270}/>
                    </div>
                    <div className="contentBx">
                        <h4>James Ford</h4>
                        <h5>Manager</h5>
                    </div>
                    
                </div>
            </div>
            <div className="card">
                <div className="content">
                    <div className="imgBx">
                        <img src={img2} alt="Picture_here" height={250} width={270}/>
                    </div>
                    <div className="contentBx">
                        <h4>Michael Collins</h4>
                        <h5>Asst. Manager</h5>
                    </div>
                    
                </div>
            </div>
            <div className="card">
                <div className="content">
                    <div className="imgBx">
                        <img src={img3} alt="Picture_here" height={250} width={270}/>
                    </div>
                    <div className="contentBx">
                        <h4>Tom Holland</h4>
                        <h5>Employee</h5>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
    );
}
export default Services;