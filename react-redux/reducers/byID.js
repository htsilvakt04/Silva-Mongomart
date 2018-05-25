function hydrateData(review) {
    return {
        comment: review.review,
        name: review.name,
        stars: review.stars,
        date: review.date
    }
}
const byID = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_REVIEW':
            const reviewToAdd = hydrateData(action.review);
            const id = action.review.id;
            return {
                [id]: {
                    ...state,
                    reviews: [
                        ...state.reviews,
                        reviewToAdd
                    ]
                }
            }
        default:
            return state;
    }
}
export default byID;