import { FaStar } from "react-icons/fa6";
import Modal from "../../components/Modal/Modal";

const ReviewForm = () => {
    const rankStar = (starNum) => {
        const starsDiv = document.querySelector('#stars')
        const stars = starsDiv.childNodes
        for (let i = 0; i <= 5; i++) {
            if (i <= starNum) {
                stars[i]?.classList?.add('text-amber-400')
            } else {
                stars[i]?.classList?.remove('text-amber-400')
            }
        }
    }

    const formSubmit = (event) => {
        event.preventDefault()
        document.getElementById('success-modal').showModal()
    }

    return (
        <>
            <div className="hero w-full h-[100lvh]">
                <div className="card bg-white shadow-lg w-80 lg:w-96 p-8 border">
                    <h1 className="text-2xl font-semibold text-center mb-5">Submit Your Review</h1>
                    <form onSubmit={formSubmit}>
                        {/* <form> */}
                        <div className="mb-5">
                            <div className="flex text-xl mb-5 gap-2" id="stars">
                                {
                                    [...Array(5).keys()].map(starNum => <FaStar className="cursor-pointer hover:text-amber-400 transition-colors duration-500" onClick={() => rankStar(starNum)} key={starNum} />)
                                }
                            </div>
                            <textarea className="textarea textarea-bordered h-32 w-full" placeholder="Write Your Review Here..."></textarea>
                        </div>
                        {/* Login button */}
                        <button type="submit" className="btn btn-primary text-white w-full">Submit</button>
                    </form>
                </div>
            </div>
            <div>
                <Modal>
                    <h3 className="font-bold text-lg text-success">Thank You!</h3>
                    <p className="py-4">Thank you for sharing your valuable feedback with us! Your thoughts matter and we appreciate you taking the time to provide us with your insights. Your input helps us to enhance our services. Your feedback is truly appreciate</p>
                </Modal>
            </div>
        </>
    );
};

export default ReviewForm;