const Socials = () => {
  return (
    <ul className="flex justify-center space-x-4">

      <li>
        <a
          href="https://github.com/sohan-naidu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="group block w-12 h-12 bg-gray-800 hover:bg-white flex items-center justify-center rounded-md transition-colors duration-200">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-gray-300 group-hover:text-gray-900 transition-colors duration-200"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
                   0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608
                   1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951
                   0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004
                   1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595
                   1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855
                   0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          </div>
        </a>
      </li>

      <li>
        <a
          href="https://www.linkedin.com/in/sohan-naidu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="group block w-12 h-12 bg-gray-800 hover:bg-[#0077B5] flex items-center justify-center rounded-md transition-colors duration-200">
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-8 h-8 text-gray-300 group-hover:text-white transition-colors duration-200"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 
                0 16 .513 16 1.146v13.708c0 .633-.526 
                1.146-1.175 1.146H1.175C.526 16 0 
                15.487 0 14.854V1.146zm4.943 
                12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 
                0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.823 
                0-1.342.54-1.342 1.248 0 .694.521 1.248 1.327 
                1.248h-.001zm4.908 
                8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 
                1.232-.878.869 0 1.216.662 
                1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 
                0-1.845.7-2.165 
                1.193v.025h-.016l.016-.025V6.169h-2.4v7.225h2.4z" />
            </svg>
          </div>
        </a>
      </li>

      <li>
        <a href="mailto:snaid@uic.edu">
          <div className="group block w-12 h-12 bg-gray-800 hover:bg-blue-500 flex items-center justify-center rounded-md transition-colors duration-200">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 m-auto text-gray-300 group-hover:text-white transition-colors duration-200"
            >
              <path d="M1.5 6.75v10.5A2.25 2.25 0 0 0 3.75 19.5h16.5A2.25 2.25 0 0 0 
                22.5 17.25V6.75A2.25 2.25 0 0 0 20.25 4.5H3.75A2.25 2.25 0 0 0 
                1.5 6.75zm18.75 0-7.5 5.625a.75.75 0 0 1-.9 
                0L3.75 6.75h16.5z" />
            </svg>
          </div>
        </a>
      </li>
    </ul>
  );
}

export default Socials;
