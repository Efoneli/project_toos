

export default function RootLayout({
    main, sidebar, children, login
  }: Readonly<{
    children: React.ReactNode;
    main: React.ReactNode;
    sidebar: React.ReactNode;
    login: React.ReactNode
  }>) {
    const isLoggedIn = true;
    return isLoggedIn ? (
      <html lang="en">
        <body>
          {children}
          
          <div className="flex">
            <div className="flex: 1">
                {sidebar}
            </div>
            <div className="flex: 3">
                {main}
            </div>
          </div>
        </body>
      </html>
    ) : (
        login
    )
  }
  