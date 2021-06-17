# the user gets to tell Santa what they would like for christmas this year
gift_request = input('What would you like from Santa this year? ')
gifts = []
gifts.append(gift_request)
additions = input('Would you like to add anything else? ')

while additions == ('Y') or additions == ('y'):
    gifts.append(input('what else would you like to add?'))
    additions = input('Would you like to add anything else? ')


# He always knows if you've been bad or good, but we'll ask anyway
year_round_behavior = input('You know Santa knows, but out of formality. Have you been good or bad? ')

if year_round_behavior == ('good'):
        print(f"Since you've been so good this year, you will recieve: ")
        for gift in gifts:
            print(gift)
else:
    print('Sorry not sorry, better luck next Christmas')
