import ListCommands from "./ListCommands";
import ProjectsList from "./ProjectsList";
import AllLinks from "./AllLinks";
import GitHubStats from "./GitHubStats";
import AboutMe from "./AboutMe";

const CommandInput = ({ command, setCommand, setOutput }) => {
  const commands = [
    { cmd: "help", desc: "list all available commands", link: "#" },
    { cmd: "whoami", desc: "learn more about me", link: "#" },
    { cmd: "github", desc: "view my github", link: "https://github.com/brianhenrydev" },
    { cmd: "linkedin", desc: "view my linkedin", link: "https://www.linkedin.com/in/brian-e-henry/" },
    { cmd: "projects", desc: "view my projects", link: "#" },
    { cmd: "clear", desc: "clear the terminal", link: "#" },
    { cmd: "all_links", desc: "view all links", link: "#" },
    { cmd: "stats", desc: "view my stats on github", link: "#" }

  ]
  function handleCommand() {

    setOutput((prev) => (
      <div>
        {prev}
        <div className="text-yellow-400">
          term-0.0.1 ~ $&nbsp;
          <span className="text-white">
            {command}
          </span>
        </div>
        {
          (() => {
            switch (command) {

              case "help":
              case "ls":
              case "?":
                return (
                  <div>
                    <ListCommands
                      commands={commands}
                    />

                  </div>
                );

              case "whoami":
                return <AboutMe />;

              case "github":
              case "gh":
                return (
                  <div>
                    <a
                      href="https://github.com/brianhenrydev"
                      target="_blank"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      check out my github
                    </a>
                  </div>
                );

              case "linkedin":
              case "lnkd":
                return (
                  <div>
                    <a
                      href="https://www.linkedin.com/in/brian-e-henry/"
                      target="_blank"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      check out my linkedin
                    </a>
                  </div>
                );
              case "stats":
                return (<GitHubStats />)

              case "projects":
                return <ProjectsList />

              case "clear":
                setOutput("")
                return <></>;

              case "all_links":
                return <AllLinks />
              default:
                return <div>Command not found. Enter <code className="text-yellow-400">help</code> to see available commands.</div>;
            }
          })()
        }
      </div>
    ));
    setCommand("");
  }

  const handleKeyDown = ({ key }) => {
    if (key === 'Enter') {
      handleCommand();
    }
  };

  return (
    <div className="flex items-center rounded-lg bg-gray-700 px-4 py-2">
      <span className="mr-2 text-yellow-400">term-0.0.1 ~ $</span>
      <input
        type="text"
        className="flex-grow border-none bg-transparent text-white outline-none"
        placeholder="Enter command (enter 'help' for available commands)"
        value={command}
        onChange={({ target: { value } }) => setCommand(value)}
        onKeyDown={handleKeyDown}
        required
      />
    </div>
  );
};

export default CommandInput;
