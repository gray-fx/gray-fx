const Footer = () => {
  return (
    <footer className="bg-secondary py-8 border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground">
          &copy; {new Date().getFullYear()} GrayFX. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
