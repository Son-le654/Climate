function VerifyRegisterContent() {
    return (
        <div>
            <div className="min-h-[500px] w-[50%] mb-[100px] bg-white mt-[50px] ml-[20%] rounded-[20px]">
                <div className="pt-[5%] pl-[8%] pr-[7%]">
                    <div className="w-[100%] h-[80px]">
                        <h1 className="text-[30px] font-bold w-[75%]">Enter the confirmation code from the text message</h1>
                    </div>
                    <div className="mt-[20px] w-[100%]">
                        <span className="text-grayborder2">
                            Let us know if this mobile number belongs to you. Enter the code in the SMS sent to
                        </span>
                        <span className="ml-[2px] font-bold">
                            hun*****@gmail.com
                        </span>
                    </div>
                    <div className="mt-[20px] h-[50px] w-[30%]">
                        <input type="text" placeholder="  CM-" className="border-[1px] border-grayborder2 w-[100%] h-[50px] rounded-2xl" />
                    </div>
                    <div className="w-[100%] h-[20px] mt-[10px] mb-[20px]">
                        <p className="text-gradientLeft">Send SMS Again (58s)</p>
                    </div>
                    <hr className="w-[100%] text-grayborder2 font-normal mt-[10%] mb-[20px]" />
                    <div className=" w-[100%] h-[45px] flex justify-end">
                        <span className="w-[30%] bg-[#b9b4b4] h-[50px] mr-[30px] rounded-2xl">
                            <button className="w-[100%] h-[40px] mt-[5px] font-bold">Update Contact Info</button>
                        </span>
                        <span className="w-[30%] bg-[#516af8] h-[50px] rounded-2xl">
                            <button className="w-[100%] h-[40px] text-white mt-[5px] font-bold">bbbbbbb</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default VerifyRegisterContent