export interface PartialReview {
    reviewStarRating: string,
    reviewText: string
}



export interface Review {
    reviewId: string | null
    reviewRestaurantId: string,
    reviewStarRating: string,
    reviewText: string
}