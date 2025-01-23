

export default function RootLayout({
    main, sidebar, children,
  }: Readonly<{
    children: React.ReactNode;
    main: React.ReactNode;
    sidebar: React.ReactNode;
  }>) {
    return (
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
    );
  }
  