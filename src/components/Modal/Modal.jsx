const Modal = ({ children }) => {
    return (
        <div>
            <dialog id="success-modal" className="bg-transparent">
                <div className="modal-box w-72 lg:w-96 shadow-sm">
                    {children}
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

export default Modal;