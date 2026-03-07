const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex justify-center py-16 px-6">
      <div className="w-full max-w-3xl space-y-14 font-mono text-sm lowercase">
        
        {/* Header */}
        <section className="space-y-1">
          <h1 className="text-base font-bold">nathan ma</h1>
          <p className="font-semibold">mechanical engineering</p>
          <p className="font-semibold">option in artificial intelligence</p>
          <p className="font-semibold">university of waterloo</p>
        </section>

        {/* Experience */}
        <section className="space-y-3">
          <h2 className="text-base font-bold">experience</h2>
          <div className="space-y-1">
            <div className="flex justify-between">
              <span className="font-semibold">toyota motor manufacturing canada</span>
              <span className="text-muted-foreground">jan 2026 – apr 2026</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">general motors</span>
              <span className="text-muted-foreground">may 2025 – aug 2025</span>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="space-y-3">
          <h2 className="text-base font-bold">projects</h2>
          <div className="space-y-1">
            <div className="flex justify-between">
              <span className="font-semibold">internal cycloidal actuator</span>
              <span className="text-muted-foreground">2024</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">pancake printer</span>
              <span className="text-muted-foreground">2024</span>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="space-y-3">
          <h2 className="text-base font-bold">technical skills</h2>
          <div className="space-y-1 text-muted-foreground">
            <p>software: solidworks, nx, autocad, catia 3dx, ansys, excel</p>
            <p>programming: python, c++, matlab, arduino, robotc, latex</p>
            <p>prototyping: machining, 3d printing, laser cutting, soldering</p>
          </div>
        </section>

        {/* Contact */}
        <section className="space-y-1">
          <p className="font-semibold">
            <a href="https://nathanma.ca" className="hover:underline">nathanma.ca</a>
          </p>
          <p className="text-muted-foreground">
            <a href="https://linkedin.com/in/nathanma0" className="hover:underline">linkedin.com/in/nathanma0</a>
          </p>
          <p className="text-muted-foreground">
            <a href="mailto:n28ma@uwaterloo.ca" className="hover:underline">n28ma@uwaterloo.ca</a>
          </p>
        </section>

      </div>
    </div>
  );
};

export default Index;
