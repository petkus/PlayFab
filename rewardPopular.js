handlers.rewardPopular = function (args) {
	var max = -1;
	var popularUsers = [];
	for each (user in args.IDtracker){
		var popularity = server.GetPlayerStatistics({
			PlayFabId: IDtracker[user],
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
	}
}
