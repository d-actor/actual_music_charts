20.times do
    Chart.create(
    name: Faker::Music.instrument
    )
end

@x = 0
300.times do
    @x += 1
    title = Faker::Pokemon.name
    artist = Faker::RockBand.name
    rank = @x
    prior_rank = (@x + 13) 
    Song.create(title: title, artist: artist, rank: rank, prior_rank: prior_rank)
end

puts 'seeded!'