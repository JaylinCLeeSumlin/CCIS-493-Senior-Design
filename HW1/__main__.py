import sys

def main(args = None):
    
    if args is None:
        args = sys.argv[1:]

    parse_cli_argv(args)
    
def parse_cli_argv(argv):
    base_url = "https://github.com/USEPA/RAQSAPI/"

    if len(argv) == 7:
        search_by_box(argv, base_url)
    elif "bybox" in argv:
        search_by_box(argv[1:], base_url)
    
    # print(f"argv: {argv}")

def search_by_box(argv, base_url):
    params = {}

    index = 0
    params["parameter"] = argv[index]
    params["bdate"] = argv[index + 1]
    params["edate"] = argv[index + 2]
    params["minlat"] = argv[index + 3]
    params["mazlat"] = argv[index + 4]
    params["minlon"] = argv[index + 5]
    params["maxlon"] = argv[index + 6]

    # print(f"parmas: {params}")


if __name__ == "__main__":
    main()

    # serch by lat/long (bybox): zipcode bdate edate minlat maxlat minlon maxlon
    main(["44201", "19950101", "19951231", "33.3", "33.6", "-87.0", "-86.7"])