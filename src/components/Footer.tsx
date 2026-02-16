const Footer = () => (
  <footer className="border-t border-border/30 py-8 px-6 text-center">
    <p className="text-muted-foreground text-sm">
      © {new Date().getFullYear()} BlueHarbor. All rights reserved. —{" "}
      <a href="https://blueharbor.com" className="text-primary hover:underline">
        blueharbor.com
      </a>
    </p>
  </footer>
);

export default Footer;
