# THIS SCRIPT IS ONLY USED BY THE ADMIN TO GET THE IDS OF THE GERMANY MATCHES 
from mobfot import MobFot

client = MobFot()
# matches = client.get_matches_by_league(9081)
matches = client.get_matches_by_league(50)
# germany_matches = [match for match in matches['allMatches'] if match['home']['name'] == 'Germany' or match['away']['name'] == 'Germany']

# for match in germany_matches:
#     print(f"{match} \n")
print(matches)