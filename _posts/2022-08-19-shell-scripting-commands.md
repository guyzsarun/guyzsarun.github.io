---
layout: post
title: "Useful Shell scripting commands"
author: guyzsarun
categories: [linux]
image: assets/images/shell-scripting-commands/htop.jpg
---

Writing scripts can be very useful and saves lots of your time but it can be a bit of a pain, but there are some useful commands that can be used to make life easier. Here are some of the commands I use frequently.

1. **Redirecting output to a file**  
    to redirect the  output to a file, use the  `>`  operator. if the file does not exist, it will be created. to append to a file, use the `>>` operator.

    For example
    ```bash
    ❯ echo "Hello World" > hello.txt

    ❯ cat hello.txt
    Hello World
    ```

    this will create a file named hello.txt with the content "Hello World". if the file already exists, the content of the file will be overwritten by "Hello World"

    ```bash
    ❯ echo "123" >> hello.txt

    ❯ cat hello.txt
    Hello World
    123
    ```

    this will append "123" to the file hello.txt. if the file does not exist, it will be created with the content "123"

2. **Redirecting the stdin/stdout and stderr**  
    File descriptors: 
    - 0 : standard input (stdin)
    - 1 : standard output (stdout)
    - 2 : standard error (stderr)  

    You can redirect these based on the file descriptor you want to use.
    ```bash
    ❯ cat hello.txt 1>success.txt 2>error.txt

    ❯ cat success.txt
    Hello World
    123
    ```
    this will redirect the standard output to success.txt and the standard error to error.txt. In this case, the `error.txt` will be empty because the `cat` command did not encounter any errors.

    ```bash
    ❯ cat no-file.txt 1>success.txt 2>error.txt

    ❯ cat error.txt
    cat: no-file.txt: No such file or directory
    ```
    In this case, we will get an error message because the file `no-file.txt` does not exist. `success.txt` will be empty because the `cat` command did not print anything to the standard output. And the `error.txt` will contain the error message.


3. **Piping the output to another command**  
    To pipe the output of one command to the input of another command, use the `|` operator.

    ```bash
    ❯ echo "Hello World" | wc -c
    12
    ```
    this will use the output of the `echo` command as input to the `wc -c` command and print the number of characters in "Hello World".

4. **Read from a file**  
    To print the contents of a file, use the `cat` command.
    ```bash
    ❯ cat hello.txt
    Hello World
    123

    ❯ cat -n hello.txt
        1   Hello World
        2   123
    ```
    this will print the content of the file `hello.txt`. Adding `-n` flag will print the line number.

5. **Searching text**  
    To search for a text in a file, use the `grep` command.

    ```bash
    ❯ grep -i "hello" hello.txt
    Hello World
    ```
    this will search for the text "hello" in the file hello.txt. Adding `-i` will ignore the case.

    You can also use `grep` with output from another command using pipe.  
    For example.
    ```bash
    ❯ kubectl get po | grep -i "grafana"
    grafana-59b7f4d459-ksw62                1/1     Running   0              24d

    ❯ kubectl describe po grafana-59b7f4d459-ksw62 | grep  -E -i "image|port"
    Image:          grafana/grafana:7.2.1
    Image ID:       docker.io/grafana/grafana@sha256:733842cca5bd9bcab1eb795da264863a8245402ff3ac8ff17e274334bb32c692
    Ports:          3000/TCP, 3000/TCP
    Host Ports:     0/TCP, 0/TCP
    ```
    will search for the text "image" or "port" in the output of the `kubectl describe po grafana-59b7f4d459-ksw62` command. Adding `-E` will allows us to search for multiple items using `|` as a separator.

6. **Extracting parts of a string**  
    To extract parts of a string, use the `cut` command.

    ```bash
    ❯ echo "Hello World" | cut -c 1-5
    Hello

    ❯ cut -c 1-5 hello.txt
    Hello
    123
    ```
    will extract the 1-5 character of the string "Hello World" or the first 5 characters of each line in the file hello.txt.

    ```bash
    ❯ pwd
    /Users/guyzsarun/Desktop

    ❯ pwd | cut -f 4 -d "/"
    Desktop
    ```

    `-f 4` will extract the 4th field of the string "/Users/guyzsarun/Desktop", `-d "/"` will use `/` as the separator.

7. **Awk command will be used to extract parts of a string line by line**

    ```bash
    ❯ docker -v
    Docker version 20.10.17, build 100c701

    ❯ docker -v | awk '{print $3,$5}'
    20.10.17, 100c701
    ```
    this will print the version of docker and the build number splitting the string by spaces. `$3` will print the version and `$5` will print the build number.

    ```bash
    ❯ java --version
    openjdk 18.0.2 2022-07-19
    OpenJDK Runtime Environment Homebrew (build 18.0.2+0)
    OpenJDK 64-Bit Server VM Homebrew (build 18.0.2+0, mixed mode, sharing)
    ```

    For this example, if we want to get only the version from the first line, we can specify the line number using `NR==1`.

    ```bash
    ❯ java --version | awk 'NR==1 {print $2}'
    18.0.2
    ```
    or we can search for terms that we want. for example, matching the line with the word `VM` and select the second field.
    ```bash
    ❯ java --version | awk '/VM/ {print $2}'
    64-Bit
    ```

8. **Translating command**
    ```bash
    ❯ echo "Hello World" | tr "H" "h"
    hello World
    ```
    this will translate the string "Hello World" to "hello World" by replacing the "H" with "h".

    or we can convert the whole string from lowercase to uppercase
    ```bash
    ❯ tr "[:lower:]" "[:upper:]" < hello.txt
    HELLO WORLD
    123

    or

    ❯ tr "[a-z]" "[A-Z]" < hello.txt
    HELLO WORLD
    123
    ```

    We can also use `tr` command to delete characters from a string by using the `-d` flag.
    ```bash
    ❯  echo "Hello World" | tr -d "[Wr]"
    Hello old
    ```
    You can specify multiple characters to delete by putting them in brackets. In the example, we deleted the "W" and "r" characters.


    We can also use SET to delete or update multiple characters from a string.
    - [:alpha:] : All letters
    - [:digit:] : All digits
    - [:upper:] : All uppercase letters
    - [:lower:] : All lowercase letters


    ```bash
    ❯ tr -d "[:digit:]" < hello.txt
    Hello World

    ```
    this will print out the content from `hello.txt` without any digits.