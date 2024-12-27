package main

import (
	"encoding/json"
	"fmt"
	"log"

	"github.com/juanfont/headscale/hscontrol/policy"
	"github.com/spf13/cobra"
	"github.com/swaggest/jsonschema-go"
)

var (
	rootCmd = &cobra.Command{
		Use: "scripts",
	}
	schemaCmd = &cobra.Command{
		Use: "schema",
		Run: func(cmd *cobra.Command, args []string) {
			reflector := jsonschema.Reflector{}

			schema, err := reflector.Reflect(policy.ACLPolicy{})
			if err != nil {
				log.Fatal(err)
			}

			j, err := json.MarshalIndent(schema, "", " ")
			if err != nil {
				log.Fatal(err)
			}

			fmt.Println(string(j))
		},
	}
)

func main() {
	rootCmd.AddCommand(schemaCmd)
	if err := rootCmd.Execute(); err != nil {
		log.Fatal(err)
	}
}
