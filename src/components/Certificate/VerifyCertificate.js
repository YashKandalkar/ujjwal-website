import { useState } from "react";
// import "../App.css";

const VerifyCertificate = () => {
  const [certData, setCertData] = useState(null);
  const [verificationCode, setVerificationCode] = useState("");

  const onSubmitClick = () => {
    fetch("https://gdsc-website.herokuapp.com/fetch-certificate-details", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ verification_code: verificationCode }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.length) {
          console.log(data);
          setCertData({
            participants_name: data[3],
            event_name: data[0],
            event_date: new Date(data[1]).toLocaleDateString(),
            participation_description: data[2],
          });
          setVerificationCode("");
        } else {
          alert(
            "Participant data not found! Please check the verification code."
          );
        }
      });
  };

  return (
    <div className="bg-gray-900 m-0 p-0 h-screen">
      {!certData ? (
        <form className="rounded justify-center flex h-full flex-col items-center p-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-7xl text-gray-100 font-bold mb-12"
              htmlFor="username"
            >
              Verify Certificate
            </label>
            <input
              className="rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="certificate-fetch"
              type="text"
              placeholder="Certificate code"
              onChange={(e) => setVerificationCode(e.target.value)}
              value={verificationCode}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={onSubmitClick}
            >
              Submit
            </button>
          </div>
        </form>
      ) : (
        <>
          {/* <h1 className="text-white-400 text-gray-100 text-center text-5xl pt-24 font-bold pl-8">
            Certificate Details
          </h1> */}
          <div className="flex flex-wrap items-center h-full bg-gray-900 md:justify-evenly p-10 pb-4">
            {/* <div
              className="box-content w-400 sm:2/3 p-4 mb-4
              border-4 bg-black-800 h-full text-center"
            >
              <div className="text-white-600 text-2xl">
                <span className="block font-bold mt-1 mb-auto">
                  Certificate awarded to {certData.participants_name}
                </span>
                <span className="block mt-1">
                  date:&nbsp;{certData.event_date}
                </span>
                <span className="block mt-1">{certData.event_name}</span>
                {/* <span className="block mt-3">User's account is verified.</span> 
                <span className="block mt-1">
                  This certificate was awarded by GDSC-DMCE.
                </span>
              </div>
            </div> */}
            <div className="box-content  pt-0 flex">
              <div className="pm-certificate-container bg-blue-100 rounded-md">
                <div className="mb-3">
                  <div className="text-center">
                    <h1 className="text-4xl">Certificate of participation</h1>
                  </div>
                </div>
                <div className="pm-certificate-block">
                  <div
                    className="pm-certificate-name mb-4 text-center"
                    style={{ borderBottom: "1px solid #888" }}
                  >
                    {/* <span className="no-underline bold text-lg mb-2">
                      GDSC DMCE
                    </span> */}
                  </div>
                  <div className="pm-earned text-center">
                    <span className="text-3xl block">
                      {certData.participants_name}
                    </span>
                    <span className="text-xl block">
                      {"has been awarded a certificate for"}
                    </span>
                    <span className="text-xl block">
                      {certData.event_name}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className=" block underline"></span>
                    {/* <span className="block text-xl">
                      Verify at (url with hash id)
                    </span> */}
                    <span className="block text-sl">
                      GDSC-DMCE has confirmed the identity of the individual
                      and their participation
                    </span>
                    <span className="text-sl block">
                      Date of the Event: {certData.event_date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default VerifyCertificate;
