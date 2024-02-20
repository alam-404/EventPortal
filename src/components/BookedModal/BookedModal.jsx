const BookedModal = ({ service }) => {
    return (
        <div>
            <dialog id="book-modal" className="bg-transparent">
                <div className="modal-box w-96 shadow-sm">
                    <h3 className="font-bold text-lg text-success">Success!!</h3>
                    <p className="py-4">Your event booking is confirmed. Get ready for an extraordinary experience filled with innovation, excitement and unforgettable moments. We look forward to hosting you at {service.service_name}. If you have any questions or special requests, feel free to reach out. See you there.</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default BookedModal;