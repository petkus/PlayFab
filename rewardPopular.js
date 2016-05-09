handlers.rewardPopular = function (args) {
	log.info(args);
	log.error("error");
	var max = -1;
	var popularUsers = [];
	log.debug("here");
	for each (user in args.userIds){
		var popularity = server.GetPlayerStatistics({
			PlayFabId: user,
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
		log.info(max);
	}
}
