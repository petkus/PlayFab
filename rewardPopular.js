handlers.rewardPopular = function () {
	var max = -1;
	var popularUsers = [];
	log.debug("here");
	for each (userId in args.userIds){
		var popularity = server.GetPlayerStatistics({
			PlayFabId: userId,
			StatisticNames: {
				Popularity
			}
		});
		popularity = popularity[0];
		if(max < popularity){
			max = popularity;
			popularUsers = [user];
		} else if(popularity = max){
			popularUsers += [user];
		}
		log.debug(max);
	}
}
