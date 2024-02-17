import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";

const Reviews = () => {
    const [userReviews, setUserReviews] = useState([])
    useEffect(() => {
        fetch('/data/user_reviews.json')
            .then(res => res.json())
            .then(data => setUserReviews(data))
    }, [])
    return (
        <div className="grid grid-cols-3 gap-3">
            {
                userReviews.map(reviews => <ReviewCard key={reviews._id} reviews={reviews} />)
            }
        </div>
    );
};

// review card
const ReviewCard = ({ reviews }) => {
    return (
        <div className="even:mt-12 even:mb-3">
            <div className="card h-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="flex items-center gap-2">
                        <div className="avatar">
                            <div className="w-16 rounded-full">
                                <img src={reviews.picture} />
                            </div>
                        </div>
                        <div>
                            <p className="font-semibold">{reviews.name}</p>
                            <div className="flex text-amber-400">
                                {
                                    reviewStar(reviews.star).map(star => star)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="text-lg">{reviews.reviews}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// for reviews star
const reviewStar = (stars) => {
    const starArr = []
    for (let i = 0; i < stars; i++) {
        starArr.push(<FaStar key={Math.random()}/>)
    }
    return starArr;
}

export default Reviews;