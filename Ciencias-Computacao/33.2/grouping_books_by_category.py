import json, csv

def by_category():
  with open("livros.json") as book_file:
    books = json.load(book_file)["results"] # lista de dicts
  
    book_categories = set()

    for book in books:
      # book_categories.add(category for category in book["categories"])

      for category in book["categories"]:
        book_categories.add(category)

    # organizar livros por { categoria: porcentagem }
    books_collection = {}

    for category in book_categories:
      books_collection[category] = 0

    for book in books:
      for category in book["categories"]:
        books_collection[category] += 1 * 100 / len(books)
    
    with open("report_by_category.csv", "w") as csvFile:
      header = ["categoria", "porcentagem"]

      writer = csv.DictWriter(csvFile, fieldnames=header)

      writer.writeheader()

      for category, percentage in books_collection.items():
        row = { "categoria": category, "porcentagem": percentage }
        writer.writerow(row)


by_category()
