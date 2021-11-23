DROP TABLE IF EXISTS vote;
DROP TABLE IF EXISTS session;
DROP TABLE IF EXISTS review;
DROP TABLE IF EXISTS restaurant;
DROP TABLE IF EXISTS profile;

CREATE TABLE profile
(
    profileId BINARY(16) NOT NULL,
    profileActivationToken CHAR(32),
    profileEmail VARCHAR(128) NOT NULL,
    profileHash CHAR(97) NOT NULL,
    profileHashConfirm CHAR(97) NOT NULL,
    UNIQUE(profileEmail),
    INDEX(profileEmail),
    PRIMARY KEY(profileId)
);

CREATE TABLE restaurant
(
    restaurantId BINARY(16) NOT NULL,
    restaurantImage VARCHAR(255) NOT NULL,
    restaurantLocation VARCHAR(16) NOT NULL,
    restaurantName VARCHAR(32) NOT NULL,
    PRIMARY KEY(restaurantId)
);

CREATE TABLE review
(
    reviewId BINARY(16) NOT NULL,
    reviewText VARCHAR(1024) NOT NULL,
    reviewRestaurantId BINARY(16),
    INDEX(reviewRestaurantId),
    FOREIGN KEY(reviewRestaurantId) REFERENCES restaurant(restaurantId),
    PRIMARY KEY(reviewId)
);

CREATE TABLE session
(
    sessionId BINARY(16) NOT NULL,
    sessionProfileId BINARY(16),
    INDEX(sessionProfileId),
    FOREIGN KEY(sessionProfileId) REFERENCES profile(profileId),
    PRIMARY KEY(sessionId)
);

CREATE TABLE vote
(

    voteProfileId BINARY(16),
    voteRestaurantId BINARY(16),
    voteSessionId BINARY(16),
    voteLiked TINYINT NOT NULL,
    INDEX(voteProfileId),
    INDEX(voteRestaurantId),
    INDEX(voteSessionId),
    FOREIGN KEY(voteProfileId) REFERENCES profile(profileId),
    FOREIGN KEY(voteRestaurantId) REFERENCES restaurant(restaurantId),
    FOREIGN KEY(voteSessionId) REFERENCES session(sessionId),
    PRIMARY KEY(voteProfileId, voteRestaurantId, voteSessionId)
);

