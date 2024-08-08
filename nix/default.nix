{ inputs
, pkgs
, system
, stdenv
, writeShellScriptBin
, bun
, dart-sass
, fd
, accountsservice
, btop
, pipewire
, bluez
, bluez-tools
, grimblast
, gpu-screen-recorder
, networkmanager
, brightnessctl
, python3
}:
let
  ags = inputs.ags.packages.${system}.default.override {
    extraPackages = [ accountsservice ];
  };

  pname = "hyprpanel";
  config = stdenv.mkDerivation {
    inherit pname;
    version = "latest";
    src = ./.;

    buildPhase = ''
      ${bun}/bin/bun build ./main.ts \
        --outfile main.js \
        --external "resource://*" \
        --external "gi://*"
    '';

    installPhase = ''
      mkdir $out
      cp -r assets $out
      cp -r scss $out
      cp -r widget $out
      cp -r services $out
      cp -f main.js $out/config.js
    '';
  };
in
{
  desktop = {
    inherit config;
    script = writeShellScriptBin pname ''
      export PATH=$PATH:${dart-sass}/bin
      export PATH=$PATH:${fd}/bin
      export PATH=$PATH:${btop}/bin
      export PATH=$PATH:${pipewire}/bin
      export PATH=$PATH:${bluez}/bin
      export PATH=$PATH:${bluez-tools}/bin
      export PATH=$PATH:${grimblast}/bin
      export PATH=$PATH:${gpu-screen-recorder}/bin
      export PATH=$PATH:${networkmanager}/bin
      export PATH=$PATH:${brightnessctl}/bin
      export PATH=$PATH:${pkgs.gnome.gnome-bluetooth}/bin
      export PATH=$PATH:${python3}/bin
      export GDK_BACKEND=wayland
      ${ags}/bin/ags -b hyprpanel -c ${config}/config.js $@
    '';
  };
}
