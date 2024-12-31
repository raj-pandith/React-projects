import React, { useEffect, useState } from 'react'

const Content = () => {

    const initData = {
        userName: "",
        userEmail: "",
        text: ""
    }

    let [data, setData] = useState(initData);

    function handleChange(e) {
        let { name, value } = e.target;
        setData({ ...data, [name]: value })
        console.log(data);
    }

    function handelSubmit(e) {
        e.preventDefault();
        console.log(data);
    }

    return (
        <div className=''>
            <h1 className='fs-1 fw-bolder'>CONTACT US</h1>
            <p className='' style={{ fontSize: "16px" }}>
                LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.
            </p>
            <div className='row gap-2 gap-md-2 '>
                <div className='col '>
                    <div className='d-flex gap-3 m-3'>
                        <button className='btn rounded-1 btn-dark w-50' onClick={() => alert("chating..")}>VIA SUPPORT CHAT</button>
                        <button className='btn rounded-1 btn-dark w-50' onClick={() => alert("calling..")} >VIA CALL</button>
                    </div>
                    <div className='d-flex justify-content-center m-3 mb-0'>
                        <div className='btn rounded-1 border-2 border-dark w-100 ' >VIA EMAIL</div>
                    </div>

                    <form className='d-flex  flex-column align-items-center'>
                        <div class="mb-3 w-75">
                            <label for="exampleFormControlInput1" className="form-label">Name</label>
                            <input type="name" name='userName' className="form-control" id="exampleFormControlInput1" placeholder="Your Name"
                                value={data.userName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3 w-75">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" name='userEmail' className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                                value={data.userEmail}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3 w-75">
                            <label for="exampleFormControlTextarea1" className="form-label">Example text</label>
                            <textarea className="form-control" name='text' id="exampleFormControlTextarea1" rows="5"
                                value={data.text}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <div className="d-flex  justify-content-end w-75">
                            <button className='btn btn-dark text-light px-5 py-1' type='submit' onClick={(e) => handelSubmit(e)} >SUBMIT</button>
                        </div>
                    </form>
                </div>
                <div className='col-12 col-md order-first order-md-2 d-flex align-items-center justify-content-center '>
                    <img src="./public/images/customercare.svg" className='img-fluid' alt="" />
                </div>

            </div>
        </div >
    )
}

export default Content
