{
  description = "Slidev talks by ryoppippi";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    nix-vite-plus.url = "github:ryoppippi/nix-vite-plus";
  };

  outputs =
    { nixpkgs, nix-vite-plus, ... }:
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
      formatter = forAllSystems (pkgs: pkgs.nixfmt);

      devShells = forAllSystems (pkgs: {
        default = pkgs.mkShellNoCC {
          buildInputs = [
            nix-vite-plus.packages.${pkgs.stdenv.hostPlatform.system}.vp
          ]
          ++ (with pkgs; [
            nodejs_26
            pnpm
            nixfmt
            jq
            git
            gh
          ]);

          shellHook = ''
            if [ ! -f node_modules/.pnpm/lock.yaml ] || [ pnpm-lock.yaml -nt node_modules/.pnpm/lock.yaml ]; then
              echo "📦 Installing dependencies..."
              vp install --frozen-lockfile
            fi
          '';
        };
      });
    };
}
