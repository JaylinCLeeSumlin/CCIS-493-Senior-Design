import sys
import requests

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
    params = {
        "parameter": argv[0],
        "bdate": argv[1],
        "edate": argv[2],
        "minlat": argv[3],
        "maxlat": argv[4],
        "minlon": argv[5],
        "maxlon": argv[6]
    }

    # print(f"parmas: {params}")

    try:
        response = requests.get(base_url, params=params)
        response.raise_for_status()

        data = response.json()
        print(data)
    except requests.exceptions.RequestException as e:
        print(f"An error occurred: {e}")


if __name__ == "__main__":
    main()

    # serch by lat/long (bybox): zipcode bdate edate minlat maxlat minlon maxlon
    # main(["44201", "19950101", "19951231", "33.3", "33.6", "-87.0", "-86.7"])