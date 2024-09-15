import sys

def main(args = None):
    
    if args is None:
        args = sys.argv[1:]

    parse_cli_argv(args)
    
def parse_cli_argv(argv):
    base_url = "https://github.com/USEPA/RAQSAPI/"

if __name__ == "__main__":
    main()