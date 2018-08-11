json.extract! @message, :id, :body, :author_id, :messageable_id, :messageable_type
json.author @message.author.username.split("_").map{ |word| word.capitalize }.join(" ")
