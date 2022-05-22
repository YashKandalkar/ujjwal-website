import { useState } from "react";

const VerifyCertificate = () => {
  const [certData, setCertData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  const onSubmitClick = () => {
    setLoading(true);
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
        } else {
          alert(
            "Participant data not found! Please check the verification code."
          );
          setVerificationCode("");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="bg-gray-900 m-0 p-0 h-screen">
      {!certData ? (
        <div className="rounded justify-center flex h-full flex-col items-center p-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-7xl text-gray-100 font-bold mb-12"
              htmlFor="username"
            >
              Verify Certificate
            </label>
            <input
              className="rounded-md text-center w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="certificate-fetch"
              type="text"
              placeholder="Certificate code"
              onChange={(e) => setVerificationCode(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onSubmitClick();
                }
              }}
              value={verificationCode}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              disabled={loading}
              className="bg-blue-500 flex items-center text-lg hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={onSubmitClick}
            >
              Submit{" "}
              {loading && (
                <img
                  className="w-6 h-6 ml-4"
                  src="/assets/loading.svg"
                  alt="loading"
                />
              )}
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-wrap items-center h-full bg-gray-900 md:justify-evenly p-10 pb-4">
            <div
              className="absolute top-4 left-4 cursor-pointer"
              onClick={() => {
                setCertData(null);
                setVerificationCode("");
              }}
            >
              <img src="/assets/left-arrow.png" alt="back arrow" />
            </div>
            <div className="box-content pt-0 flex">
              <div className="pm-certificate-container p-6 bg-blue-100 rounded-md">
                <div className="mb-3">
                  <div className="text-center">
                    <h1 className="text-4xl">
                      Certificate of{" "}
                      {certData.participation_description === "participation"
                        ? "Participation"
                        : "Excellence"}
                    </h1>
                  </div>
                </div>
                <div className="pm-certificate-block">
                  <div
                    className="pm-certificate-name mb-4 text-center"
                    style={{ borderBottom: "1px solid #888" }}
                  ></div>
                  <div className="pm-earned text-center">
                    <span className="text-3xl block">
                      {certData.participants_name}
                    </span>
                    <span className="text-xl block">
                      {"has been awarded a certificate for"}
                    </span>
                    <span className="text-xl block">
                      {certData.participation_description === "participation"
                        ? "participating in"
                        : `securing the ${ordinal_suffix_of(
                            parseInt(certData.participation_description)
                          )} rank in`}
                    </span>
                    <span className="text-xl block">
                      {certData.event_name}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className=" block underline"></span>
                    <span className="text-sl block">
                      Date of the Event: {certData.event_date}
                    </span>
                    <span className="block text-sm pt-4">
                      GDSC-DMCE has confirmed the identity of the individual
                      and their participation.
                    </span>
                    <span className="block text-sm pt-1">
                      Certificate Code: {verificationCode}
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

function ordinal_suffix_of(i) {
  var j = i % 10,
    k = i % 100;
  if (j === 1 && k !== 11) {
    return i + "st";
  }
  if (j === 2 && k !== 12) {
    return i + "nd";
  }
  if (j === 3 && k !== 13) {
    return i + "rd";
  }
  return i + "th";
}

export default VerifyCertificate;
