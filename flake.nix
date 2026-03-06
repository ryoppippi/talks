{
  description = "Slidev talks by ryoppippi";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";

  outputs =
    { nixpkgs, ... }:
    let
      systems = [
        "x86_64-linux"
        "aarch64-linux"
        "x86_64-darwin"
        "aarch64-darwin"
      ];
      forAllSystems = f: nixpkgs.lib.genAttrs systems (system: f nixpkgs.legacyPackages.${system});
    in
    {
      devShells = forAllSystems (pkgs: {
        default = pkgs.mkShellNoCC {
          buildInputs = with pkgs; [
            bun
            jq
            git
            gh
          ];

          shellHook = ''
            if [ ! -d node_modules ] || [ bun.lock -nt node_modules/.stamp ]; then
              echo "📦 Installing dependencies..."
              bun ci
              touch node_modules/.stamp
            fi
          '';
        };
      });
    };
}
